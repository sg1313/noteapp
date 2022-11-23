// 게시글 메인화면

import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NoteListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  background: gray; /* 사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일 */
`;

function NoteList() {
  const navigate = useNavigate();
  return (
    <NoteListBlock>
      {/* 메모장 다 뿌리기 */}
      {/* <CreateNote /> */}
      <input name="search" />
      <div>메모장 뿌리기 영역</div>
      <button onClick={() => navigate("/create")}>등록하기</button>
    </NoteListBlock>
  );
}

export default NoteList;
