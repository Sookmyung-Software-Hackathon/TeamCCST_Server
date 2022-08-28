# TeamCCST_Server
### 청춘의 식탁을 당신에게, 청춘식탁

<img width="853" alt="목업" src="https://user-images.githubusercontent.com/20807197/187061814-1ee7ec4c-a97d-41de-8423-0eae598975f0.png">

> 👨🏻‍🍳 👵🏻 👴🏻 맛있는 비법이 가득한 시니어 청춘의 식탁을
누구나 즐길 수 있도록, 시니어 요리법 공유 서비스를 제공합니다.

> Sookmyung Software Hackathon 2nd   
> 프로젝트 기간 : 2022.08.27 ~ 2022.08.28

### Server Developers

| 채정아 | 장서현 |
| :---: | :---: | 
|<img src="https://user-images.githubusercontent.com/20807197/187062369-c5f312bb-104b-4267-b87d-02d7715b468a.png" width="200px" height="200px" />|<img src ="https://user-images.githubusercontent.com/20807197/187062387-6864414d-c5b3-47a8-8d25-6635a96ea0e2.png" width = "200px" height="200px" />|
|[jokj624](https://github.com/jokj624)|[seohyun-106](https://github.com/seohyun-106)| 

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
