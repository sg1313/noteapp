import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "antd";
const { TextArea } = Input;

const onChange = (e) => {
  console.log("Change:", e.target.value);
};

const About = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      제목
      <Input showCount maxLength={20} onChange={onChange} />
      <br />
      내용
      <TextArea
        placeholder="내용 입력"
        autoSize={{
          maxRows: 13,
        }}
        maxLength={500}
        showCount
      />
      <div
        style={{
          margin: "24px 0",
        }}
      />
      <br />
      <Link to="/create">
        <button>등록하기</button>
      </Link>
      <
    </div>
  );
};

export default About;
