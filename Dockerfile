# Node.js 기본 이미지 사용
FROM node:18-alpine

# 작업 디렉토리 설정
WORKDIR /app

# 시스템 의존성 설치
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    git

# package.json과 package-lock.json 복사
COPY package*.json ./

# 프로젝트 의존성 설치
RUN npm install

# 소스 코드 복사
COPY . .

# Gatsby 개발 서버 포트
EXPOSE 8000

# 환경 변수 설정
ENV NODE_ENV=development \
    GATSBY_WEBPACK_PUBLICPATH=/

# 개발 서버 실행
CMD ["npm", "run", "develop", "-H", "0.0.0.0"] 