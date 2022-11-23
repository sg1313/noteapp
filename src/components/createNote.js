import React from "react";
import styled from "styled-components";

// styled-component로 만든 컴포넌트는 이벤트처리시 target의 value, id등을 받아오질 못합니다.

const CreateItemBlock = styled.div`
  //   display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

function CreateNote() {
  return (
    <div>
      <CreateItemBlock>
        <button>뒤로가기</button> <br />
        <input type="text" name="title" placeholder="제목" /> <br />
        <input type="text" name="body" placeholder="내용을 입력하세요" /> <br />
        <button>삭제하기</button>
        <button>등록하기</button>
      </CreateItemBlock>
    </div>
  );
}

export default CreateNote;
