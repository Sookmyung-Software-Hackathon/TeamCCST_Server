# TeamCCST_Server
### 청춘의 식탁을 당신에게, 청춘식탁

<img width="853" alt="목업" src="https://user-images.githubusercontent.com/20807197/187061814-1ee7ec4c-a97d-41de-8423-0eae598975f0.png">

### 서비스 개요

> **“젊은 세대는 배우려하고, 시니어 세대는 교류하려한다”**   
대한민국 대표 시니어 유튜버 ‘박막례 할머니'의  ‘박막례시피' 에 MZ 세대들은 왜 이렇게 열광할까요?   
MZ 세대들은 시니어의 연륜과 경험을 궁금해합니다.         
> <br/>
하지만, 시니어가 주체가 되어 경험을 공유하는 플랫폼은 아직 많지 않습니다. 
> <br/>
전체 인구의 14% 가 노년층인 한국은 고령사회입니다.    
우리는 이제 ‘세대 차이' 가 아닌 ‘세대 **공존**' 향해 나아갈 시기입니다.   
> <br/>
‘청춘식탁'은 고령 사회에서 **젊은 유저와 시니어 유저의 공존을 위한 플랫폼이 부족하다는 Pain Point** 에서 출발했습니다.    
> <br/>
시니어 유저는 비법이 가득한 요리법을 언제 어디서나 간편하게 등록할 수 있습니다.   
“할머니가 자주 해주시던 김치전이 먹고싶은데"..    
특별한 손맛이 궁금한 유저들은 언제든 시니어 유저의 요리법을 열어볼 수 있죠. <br/>     
   
**‘청춘식탁’은 시니어 세대가 주체가 되고,     
젊은 세대들이 시니어와 음식이라는 매개체를 통해 유대감을 형성할 수 있는 가장 따뜻한 서비스입니다.**   

> Sookmyung Software Hackathon 2nd   
> 프로젝트 기간 : 2022.08.27 ~ 2022.08.28

### 서비스 목적
> **시니어 세대의 능동적인 컨텐츠 참여**   
> **시니어 세대와 MZ 세대 간의 공감대 형성**   
> ‘**음식'이라는 가벼운 주제를 통한 세대 간의 소통 활성화**   

### 기대 효과
> **시니어 세대와 현대 문화의 공존**   
> **시니어 세대와 MZ 세대 간의 화합**   
> **자연스러운 소통을 통한 세대 간의 유대감 형성**   

### 디자인 시스템
![디자인시스템](https://user-images.githubusercontent.com/20807197/187070814-b95909d9-ac46-495f-83b0-404320b14b86.png)

### 주요 기능
![홈화면-설명](https://user-images.githubusercontent.com/20807197/187070745-67472d97-96cf-4f09-b513-f733b413c293.png)
![회원가입설명](https://user-images.githubusercontent.com/20807197/187070758-9a75f4b7-7c88-4fd3-b0fe-5fe41663bfff.png)
![요리법 상세보기](https://user-images.githubusercontent.com/20807197/187070760-1d3f08ce-61ff-4485-bed2-1bc67836f2d0.png)
![작성하기](https://user-images.githubusercontent.com/20807197/187070775-c9d01554-03ed-4cc3-8536-eb2d74129306.png)


### Tech Stacks
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">\
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">
<img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white">
<img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white">
<img src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white">
<img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white">

### API 명세
[swagger 바로가기](https://ccst-server.herokuapp.com/api-docs/)

### Server Architecture

![architecture](https://user-images.githubusercontent.com/20807197/187064193-e135a4a4-f09e-4822-af14-e70e12723974.png)

### Dependencies
```json
    "aws-sdk": "^2.1204.0",
    "bcrypt": "^5.0.1",
    "body-parser": "^1.18.1",
    "cors": "^2.8.5",
    "dotenv": "^16.0.0",
    "express": "^4.15.4",
    "inversify": "^6.0.1",
    "inversify-binding-decorators": "^4.0.0",
    "jsonwebtoken": "^8.5.1",
    "multer": "^1.4.4",
    "multer-s3": "^2.10.0",
    "mysql": "^2.14.1",
    "reflect-metadata": "^0.1.10",
    "swagger-ui-express": "^4.3.0",
    "ts-node": "^10.9.1",
    "tsoa": "^4.0.0",
    "typeorm": "0.2.41"
 ```
 
### Commit Convention

| 태그 이름  |                             설명                             |
| :--------: | :----------------------------------------------------------: |
|  Chore   |                  코드 수정, 패키지 관리 등                  |
|   Feat   |                       새로운 기능 구현                       |
|  HOTFIX  |             issue나 QA에서 급한 버그 수정에 사용             |
|   Fix    |                       버그, 오류 해결                        |
|   Del    |                     쓸모 없는 코드 삭제                      |
|   Docs   |                 README나 WIKI 등의 문서 개정                 |
|   Move   |               프로젝트 내 파일이나 코드의 이동               |
|  Rename  |                파일 이름 변경이 있을 때 사용                 |
| Refactor |                   이미 완성된 기능 리팩토링                |

### Coding Convention
[Typescript Style Guide](https://basarat.gitbook.io/typescript/styleguide)

### Server Developers

| 채정아 | 장서현 |
| :---: | :---: | 
|<img src="https://user-images.githubusercontent.com/20807197/187062369-c5f312bb-104b-4267-b87d-02d7715b468a.png" width="200px" height="200px" />|<img src ="https://user-images.githubusercontent.com/20807197/187062387-6864414d-c5b3-47a8-8d25-6635a96ea0e2.png" width = "200px" height="200px" />|
|[jokj624](https://github.com/jokj624)|[seohyun-106](https://github.com/seohyun-106)| 
