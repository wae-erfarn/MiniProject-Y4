import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import Login from "./screens/Login";
// import Register from "./screens/Register";
// import Forgotpassword from "./screens/Forgotpassword";
import Index from "./screens/Index";
// import Profile from "./screens/Profile";

// import Otp from "./screens/Otp";
// import Resetpassword from "./screens/Resetpassword";

import Seaoffog from "./screens/Seaoffog";
import Watchontarasinghe from "./screens/Watchontarasinghe";
import Mosque300year from "./screens/Mosque300year";
import Aomanao from "./screens/Aomanao";
import Narathatbeach from "./screens/Narathatbeach";
import Phanubdao from "./screens/Phanubdao";
import Pajowaterfall from "./screens/Pajowaterfall";
import Gowlengjishrine from "./screens/Gowlengjishrine";
import Watphrathatphukhaothong from "./screens/Watphrathatphukhaothong";
import Oldbridge100years from "./screens/Oldbridge100years";

const Stack = createStackNavigator();

const horizontalAnimation = {
  gestureDirection: "horizontal",
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={horizontalAnimation}>
        {/* <Stack.Screen name='Loading' component={Loading} options={{ 
        headerShown: false,
        title: 'โหลด',
          headerStyle: {
          backgroundColor: '#48D1CC'
          }}}/> */}



        {/* <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            title: "เข้าสู่ระบบ",
            headerStyle: {
              backgroundColor: "#ffbb3b",
            },
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
            title: "สมัครสมาชิก",
            headerStyle: {
              backgroundColor: "#48D1CC",
            },
          }}
        />
        <Stack.Screen
          name="Forgotpassword"
          component={Forgotpassword}
          options={{
            headerShown: false,
            title: "ลืมรหัสผ่าน",
            headerStyle: {
              backgroundColor: "#48D1CC",
            },
          }}
        />

        <Stack.Screen
          name="Otp"
          component={Otp}
          options={{
            headerShown: false,
            title: "Otp",
            headerStyle: {
              backgroundColor: "#48D1CC",
            },
          }}
        />

        <Stack.Screen
          name="Resetpassword"
          component={Resetpassword}
          options={{
            headerShown: false,
            title: "รีเซ็ตรหัสผ่าน",
            headerStyle: {
              backgroundColor: "#48D1CC",
            },
          }}
        /> */}
        <Stack.Screen
          name="Index"
          component={Index}
          options={{
            headerShown: false,
            title: "หน้าแรก",
            headerStyle: {
              backgroundColor: "#48D1CC",
            },
          }}
        />
        {/* <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            title: "โปรไฟล์",
            headerStyle: {
              backgroundColor: "#48D1CC",
            },
          }}
        /> */}

<Stack.Screen
          name="Seaoffog"
          component={Seaoffog}
          options={{
            headerShown: false,
            title: "ทะเลหมอกเขาน้ำใส",
            headerStyle: {
              backgroundColor: "#48D1CC",
            },
          }}
        />
 <Stack.Screen
          name="Watchontarasinghe"
          component={Watchontarasinghe}
          options={{
            headerShown: false,
            title: "วัดชลธาราสิงเห",
            headerStyle: {
              backgroundColor: "#48D1CC",
            },
          }}
        />
 <Stack.Screen
          name="Mosque300year"
          component={Mosque300year}
          options={{
            headerShown: false,
            title: "มัสยิด 300 ปี",
            headerStyle: {
              backgroundColor: "#48D1CC",
            },
          }}
        />

 <Stack.Screen
          name="Aomanao"
          component={Aomanao}
          options={{
            headerShown: false,
            title: "อุทยานแห่งชาติอ่าวมะนาว",
            headerStyle: {
              backgroundColor: "#48D1CC",
            },
          }}
        />

 <Stack.Screen
          name="Narathatbeach"
          component={Narathatbeach}
          options={{
            headerShown: false,
            title: "หาดนราทัศน์",
            headerStyle: {
              backgroundColor: "#48D1CC",
            },
          }}
        />
 <Stack.Screen
          name="Phanubdao"
          component={Phanubdao}
          options={{
            headerShown: false,
            title: "ผานับดาว",
            headerStyle: {
              backgroundColor: "#48D1CC",
            },
          }}
        />

 <Stack.Screen
          name="Pajowaterfall"
          component={Pajowaterfall}
          options={{
            headerShown: false,
            title: "น้ำตกปาโจ",
            headerStyle: {
              backgroundColor: "#48D1CC",
            },
          }}
        />

 <Stack.Screen
          name="Gowlengjishrine"
          component={Gowlengjishrine}
          options={{
            headerShown: false,
            title: "ศาลเจ้าโก้วเล่งจี่",
            headerStyle: {
              backgroundColor: "#48D1CC",
            },
          }}
        />

 <Stack.Screen
          name="Watphrathatphukhaothong"
          component={Watphrathatphukhaothong}
          options={{
            headerShown: false,
            title: "วัดพระธาตุภูเขาทอง",
            headerStyle: {
              backgroundColor: "#48D1CC",
            },
          }}
        />

         <Stack.Screen
          name="Oldbridge100years"
          component={Oldbridge100years}
          options={{
            headerShown: false,
            title: "สะพานคอย 100 ปี",
            headerStyle: {
              backgroundColor: "#48D1CC",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
