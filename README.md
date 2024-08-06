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
4) Screenshot >> which shares the details 
5) allure report >> report integration 
6) Readme >> this helps me to get the data 
```

## Test Case 1
```sh
 test Title  :- To verify that the user is able to generate the Image 
 STR (Steps To Repoduces):- Login to application >> go to generate Image >> fill the required details >> click on generate Image with 2 tokens>> observer the screen.
 this is a positive test case, I have selected  this test because it felt that most reusable at the time of regression 
```

## Test Case 2
```sh
 test Title  :- To verify that the user is not able to generate the Image and able to see check the error mesages.
 STR (Steps To Repoduces):- Login to application >> go to generate Image >> fill the required details >> click on generate Image with 32 tokens 
  >> observer the screen.
 this is a negative test case, I have selected his test because it felt that most reusable at the time of regression and able to find the error messages.
```