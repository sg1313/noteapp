import React from "react";

const Home = () => {
  return (
    <div>
      <input type="text" name="title" placeholder="제목"></input>
      검색
      <input type="text" name="search"></input>
      <button>등록하기</button>
    </div>
  );
};

export default Home;
