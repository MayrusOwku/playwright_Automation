# 🤖⚙️🔧🦾👩‍💻💻🎭 QA Automation


## install Playwright 

```sh
npm init playwright@latest
```
## clone the repositories

```sh
https://github.com/MayrusOwku/playwright_Automation.git
```

## run headless mode 

```sh
npx playwright test
```

## run UI mode 

```sh
npx playwright test --headed
```

## show HTML reports

```sh
npx playwright show-report
```

## Built a POM framework 
```sh
there are multiple folders like 
1) PageObject >> this covers few pages of the application like Login, Generate Image.
2) Utils >> this covers all the reusable functions 
3) Test file >> this covers all executable test cases 
4) Screenshot >> which shares the screenshpot details 
5) allure report >> report integration 
```
 
## Test Case 1
```sh
 test Title  :- To verify that the user is able to generate the Image 

 STR (Steps To Repoduces):
    Login to application.
    Go to generate Image.
    Fill the required details.
    Click on generate Image with 2 tokens.
    Observer the screen.

 Why i have selected this Test cases?
 Because this is a positive test case, I have selected  this test  to ensures uniform quality and accuracy and Delivers faster result as expected, also I felt that most reusable at the time of regression 
```

## Test Case 2
```sh
 test Title  :- To verify that the user is not able to generate the Image and able to see the error message when we have low balance

 STR (Steps To Repoduces):
    Login to application
    Go to generate Image 
    Fill the required details
    Click on generate Image with 32 tokens 
    Oserver the screen.

 Why i have selected this Test cases?
 this is a negative test case, I have selected his test because it most of the user will try to generate the image even after the Balance in account is Zero,so as they try to  generate the image we shoule deliver a proper error message. and here in this automation we are validaing the the error message.
 ```