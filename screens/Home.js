import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
  LogBox,
} from "react-native";
import { Icon, Header, Avatar } from "react-native-elements";
import ViewSlider from "react-native-view-slider";

const { width, height } = Dimensions.get("window");

export default function Home({ navigation }) {


  return (
    <View>
      <StatusBar animated={true} />

      <Header
        placement="center"
        backgroundColor="#f37721"
        containerStyle={{
          borderBottomWidth: 0,
          height: Platform.select({
            android: 70,
            default: 70,
          }),
        }}      
        centerComponent={{ text: 'สถานที่ท่องเที่ยว จ.นราธิวาส', style: { color: '#fff' } }} 
      />

      <ScrollView>
        <View style={styles.container}>
          <>
            <ViewSlider
              renderSlides={
                <>
                  <View style={styles.viewBox}>
                    <Image
                      source={require("../src/assets/phanubdao.jpg")}
                      style={{ height: 200, width }}
                    />
                  </View>
                  <View style={styles.viewBox}>
                    <Image
                      source={require("../src/assets/mosque300year.jpg")}
                      style={{ height: 200, width }}
                    />
                  </View>
                  <View style={styles.viewBox}>
                    <Image
                      source={require("../src/assets/aomanao.jpg")}
                      style={{ height: 200, width }}
                    />
                  </View>
                </>
              }
              style={styles.slider} //Main slider container style
              height={200} //Height of your slider
              slideCount={3} //How many views you are adding to slide
              dots={true} // Pagination dots visibility true for visibile
              dotActiveColor="#f37721" //Pagination dot active color
              dotInactiveColor="white" // Pagination do inactive color
              dotsContainerStyle={styles.dotContainer} // Container style of the pagination dots
              autoSlide={false} //The views will slide automatically
              slideInterval={3000} //In Miliseconds
            />
          </>

                   
                  {/* <View style={styles.categoryViewBox}>
                    <View style={styles.categoryContainer}>
                      <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={() => navigation.navigate('Seaoffog')}
                      >
                        <View style={styles.categoryIcon}>
                          <Image
                            style={styles.categoryLogo}
                            source={require("../src/assets/seaoffog.jpg")}
                          />
                          <Text style={styles.categoryBtnTxt}>1.ทะเลหมอกเขาน้ำใส</Text>
                        </View>
                      </TouchableOpacity>
                    </View> */}

                    <View style={styles.categoryViewBox}>
                    <View style={styles.categoryContainer}>
                      <TouchableOpacity
                        style={styles.categoryBtn}
                        
                      >
                        <View style={styles.categoryIcon}>
                          <Image
                            style={styles.categoryLogo}
                            source={require("../src/assets/seaoffog.jpg")}
                          />
                          <Text style={styles.categoryBtnTxt} onPress={() => navigation.navigate('Seaoffog')}>1.ทะเลหมอกเขาน้ำใส</Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.categoryContainer}>
                      <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={() => navigation.navigate('Watchontarasinghe')}
                      >
                        <View style={styles.categoryIcon}>
                          <Image
                            style={styles.categoryLogo}
                            source={require("../src/assets/watchontarasinghe.jpg")}
                          />
                          <Text style={styles.categoryBtnTxt}>2.วัดชลธาราสิงเห</Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.categoryContainer}>
                      <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={() => navigation.navigate('Mosque300year')}
                      >
                        <View style={styles.categoryIcon}>
                          <Image
                            style={styles.categoryLogo}
                            source={require("../src/assets/mosque300year.jpg")}
                          />
                          <Text style={styles.categoryBtnTxt}>3.มัสยิด 300 ปี</Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.categoryContainer}>
                      <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={() => navigation.navigate('Aomanao')}
                      >
                        <View style={styles.categoryIcon}>
                          <Image
                            style={styles.categoryLogo}
                            source={require("../src/assets/aomanao.jpg")}
                          />
                          <Text style={styles.categoryBtnTxt}>4.อุทยานแห่งชาติอ่าวมะนาว</Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.categoryContainer}>
                      <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={() => navigation.navigate('Narathatbeach')}
                      >
                        <View style={styles.categoryIcon}>
                          <Image
                            style={styles.categoryLogo}
                            source={require("../src/assets/narathatbeach.jpg")}
                          />
                          <Text style={styles.categoryBtnTxt}>5.หาดนราทัศน์</Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.categoryContainer}>
                      <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={() => navigation.navigate('Phanubdao')}
                      >
                        <View style={styles.categoryIcon}>
                          <Image
                            style={styles.categoryLogo}
                            source={require("../src/assets/phanubdao.jpg")}
                          />
                          <Text style={styles.categoryBtnTxt}>6.ผานับดาว</Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.categoryContainer}>
                      <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={() => navigation.navigate('Pajowaterfall')}
                      >
                        <View style={styles.categoryIcon}>
                          <Image
                            style={styles.categoryLogo}
                            source={require("../src/assets/pajowaterfall.jpg")}
                          />
                          <Text style={styles.categoryBtnTxt}>7.น้ำตกปาโจ</Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.categoryContainer}>
                      <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={() => navigation.navigate('Gowlengjishrine')}
                      >
                        <View style={styles.categoryIcon}>
                          <Image
                            style={styles.categoryLogo}
                            source={require("../src/assets/gowlengjishrine.jpg")}
                          />
                          <Text style={styles.categoryBtnTxt}>8.ศาลเจ้าโก้วเล่งจี่</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    
                    <View style={styles.categoryContainer}>
                      <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={() => navigation.navigate('Watphrathatphukhaothong')}
                      >
                        <View style={styles.categoryIcon}>
                          <Image
                            style={styles.categoryLogo}
                            source={require("../src/assets/watphrathatphukhaothong.jpg")}
                          />
                          <Text style={styles.categoryBtnTxt}>9.วัดพระธาตุภูเขาทอง</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    
                    <View style={styles.categoryContainer}>
                      <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={() => navigation.navigate('Oldbridge100years')}
                      >
                        <View style={styles.categoryIcon}>
                          <Image
                            style={styles.categoryLogo}
                            source={require("../src/assets/oldbridge100years.jpg")}
                          />
                          <Text style={styles.categoryBtnTxt}>10.สะพานคอย 100 ปี</Text>
                        </View>
                      </TouchableOpacity>
                    </View>

                  </View>
                  
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: "523%",
  },

  Logo: {
    width: 25,
    height: 25,
    left: 7.5,
  },

  viewBox: {
    paddingHorizontal: 20,
    justifyContent: "center",
    width: width,
    padding: 10,
    alignItems: "center",
    height: 200,
  },
  slider: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
  },
  dotContainer: {
    backgroundColor: "transparent",
    position: "absolute",
    bottom: -10,
  },

  textStyle: {
    fontSize: 12,
    color: "black",
    flex: 1,
  },
  categoryContainer: {
    flexDirection: "row",
    width: "96%",
    alignSelf: "center",
    marginTop: 10,
  
  },
  categoryBtn: {
    flex: 1,
    width: "30%",
    marginHorizontal: 0,
    alignSelf: "center",
  },
  categoryIcon: {
  
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: '100%',
    height: '100%',
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },

  categoryBtnTxt: {
    alignSelf: "center",
    fontSize: 16,
    color: "#000000",
    top: 5
  },
  categoryLogo: {
    width: "75%",
    height: "75%",
  borderRadius: 8,
  },

  categoryViewBox: {
    width: width,
    height: 200,
  },
  categorySlider: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryDotContainer: {
    backgroundColor: "transparent",
    position: "absolute",
    bottom: -15,
  },
  
  inputView: {
    width: "110%",
    height: 25,
    backgroundColor: "#ffffff",
    // backgroundColor: "#dfe4ea",
    borderRadius: 10,
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },


});
