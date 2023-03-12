import styled from "styled-components";

export const Postagem = styled.div`
  background-color: #fff;
  padding: 16px;
  box-shadow: 1px 2px 6px #333;
  border-radius: 16px;
`;

export const PostImagem = styled.img`
  max-width: 100%;
  display: block;
`;

export const PostText = styled.p`
  color: #333;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 24px;
`;

export const PostCommentsFormTextarea = styled.textarea`
  color: #333;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 24px;
`;

export const PostComments = styled.ul``

export const PostComment = styled.li`
  color: #444;
  font-size: 12px;
  line-height: 20px;
  background-color: #ffff9f;
  padding: 8px 16px;
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const PostCommentContent = styled.p`
  font-style: italic;
`;

export const PostCommentsForm = styled.form`
  margin-top: 16px;
  text-align: right;
`;

export const PostFormTextarea = styled.textarea`
  display: block;
  resize: none;
  width: 100%;
  margin-bottom: 8px;
  padding: 8px 16px;
`;

export const PostButton = styled.button`
  padding: 8px 16px;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  background-color: #27ae60;
  color: #eee;
  cursor: pointer;
`;
