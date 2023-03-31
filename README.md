# Kravchenko Maria, 053502

# Learning platform

# Project description
The project will be a learning platform, something like Stepik.

# Mock up
Unauthorized home page
![](https://github.com/kmashaa/learning_platform/blob/main/lab/Unauthorized_home_page.png)

Sign up page
![](https://github.com/kmashaa/learning_platform/blob/main/lab/sign_up_page.png)

Sign in page
![](https://github.com/kmashaa/learning_platform/blob/main/lab/sign_in_page.png)

Profile page
![](https://github.com/kmashaa/learning_platform/blob/main/lab/Profile_page.png)

Settings page
![](https://github.com/kmashaa/learning_platform/blob/main/lab/Settings_page.png)

My courses page
![](https://github.com/kmashaa/learning_platform/blob/main/lab/My_courses_page.png)

Choosing course by theme authorized page
![](https://github.com/kmashaa/learning_platform/blob/main/lab/Choosing_course_by_theme_authorized_page.png)

Choosing course by theme unauthorized page
![](https://github.com/kmashaa/learning_platform/blob/main/lab/Choosing_course_by_theme_unauthorized_page.png)

Information about course unauthorized page
![](https://github.com/kmashaa/learning_platform/blob/main/lab/Information_about_course_unauthorized_page.png)

Information about course authorized page
![](https://github.com/kmashaa/learning_platform/blob/main/lab/Information_about_course_authorized_page.png)

Comments authorized page
![](https://github.com/kmashaa/learning_platform/blob/main/lab/Comments_authorized_page.png)

New comment page
![](https://github.com/kmashaa/learning_platform/blob/main/lab/New_comment_page.png)

Choosing lessons page
![](https://github.com/kmashaa/learning_platform/blob/main/lab/Choosing_lessons_page.png)

Lesson authorized page
![](https://github.com/kmashaa/learning_platform/blob/main/lab/Lesson_authorized_page.png)

Information about test page
![](https://github.com/kmashaa/learning_platform/blob/main/lab/Information_about_test_page.png)

Comments unauthorized page
![](https://github.com/kmashaa/learning_platform/blob/main/lab/Comments_unauthorized_page.png)

Test page
![](https://github.com/kmashaa/learning_platform/blob/main/lab/Test_page.png)

Good test result page
![](https://github.com/kmashaa/learning_platform/blob/main/lab/Good_test_result_page.png)

Bad test result page
![](https://github.com/kmashaa/learning_platform/blob/main/lab/Bad_test_result_page.png)


# Main functions
1) Authorisation
2) Registration
3) Edit profile (personal data)
4) View description of course
5) View description of lesson
6) Learn lesson
7) Pass test
8) View description of test
9) Add comment to course and rate it
10) Read comments


# Data models description
User:
    user_id
    email
    username
    avatar
    password
    
Comment:
    comment_id
    comment_text
    rating
    user_id
    course_id
    
Course:
    course_id
    course_name
    theme_id
    description
    rating
    
Lesson:
    lesson_id
    lesson_text
    course_id
    lesson_name
    
Theme:
    theme_id
    theme_name
    
Test:
    test_id
    course_id
    test_name
    test_description
    
Question:
    question_id
    question_text
    test_id
    
Answer:
    answer_id
    answer_text
    question_id
    correctness

