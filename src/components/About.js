import React from "react";

const About = () => {
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트랍니다.</p>
      제목
      <input type="text" name="title" placeholder="제목"></input>
      내용
      <input type="text" name="content" placeholder="내용입력"></input>
    </div>
  );
};

export default About;
