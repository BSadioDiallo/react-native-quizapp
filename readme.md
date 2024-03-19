## Description

This quiz application was made using :

* react-native with expo
* tailwindcss via nativewind

## screens
Here are some application screens.
<div>
  <img src="https://github.com/BSadioDiallo/BSadioDiallo/blob/main/assets/react-native-quizapp/home.png" height="300px">
  <img src="https://github.com/BSadioDiallo/BSadioDiallo/blob/main/assets/react-native-quizapp/quiz_selection.png" height="300px">
  <img src="https://github.com/BSadioDiallo/BSadioDiallo/blob/main/assets/react-native-quizapp/not_seleccted.png" height="300px">
  <img src="https://github.com/BSadioDiallo/BSadioDiallo/blob/main/assets/react-native-quizapp/selected.png" height="300px">
  <img src="https://github.com/BSadioDiallo/BSadioDiallo/blob/main/assets/react-native-quizapp/results.png" height="300px">
</div>

## Requirements

> [!NOTE]
> Prerequsites:  
> You must have **git** and **nodejs** installed in your machine.  
> here is quick links for both of them [download git](https://git-scm.com/downloads), [download nodejs](https://nodejs.org/en/download/current)

The easiest way to try this application is to download the expo app from your app store depending on your phone.
But you can also use a virtual device instead.

## Try it
Here is steps if you want to test the application.

```
git clone https://github.com/BSadioDiallo/react-native-quizapp.git &&
cd react-native-quizapp &&
npm install &&
npm start
```

And then scan the QRCODE using expo application.

## How it works

The quizs are stored in a json file, each quiz is a list of object represented like this :  
```
{
  "question" : "value",
  "choices" : ["value 1", "value 2", "value 3"]
  "response" : 1,
  "description" : "Explanation" 
}
```

- The question attribute represent the question to answer
- The choices attribute is a list of possible answers
- The response attribute is the index of the good answer in the *choices* list
- The description attribute give us some explanation

> [!IMPORTANT]
> The data was generated using AI, you may encounter errors  
> Refer to the [ultime.json](/data/ultime.json) file inside `/data` directory if you want to change the data.  
> The present data are in french.

## logo images
The logo images was picked from [here](https://www.iconfinder.com/iconsets/logos-and-brands).

![javascript logo](/assets/icons/4373213_js_logo_logos_icon.png)
![javascript logo](/assets/icons/4373217_java_logo_logos_icon.png)
![html logo](/assets/icons/4373229_html5_logo_logos_icon.png)
![python logo](/assets/icons/4375050_logo_python_icon.png)
