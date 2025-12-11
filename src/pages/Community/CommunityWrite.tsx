import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect, type ChangeEvent } from "react";

import Header from "@/components/Header/Header";
import * as S from "@/pages/Community/CommunityWritestyle";

import Letter_Char from "@/assets/letter_charter.svg";
import Back_white from "@/assets/arrow_back_white.svg";
import ADD_img from "@/assets/add_photo_alternate.svg";

import { createPost, uploadPostImage, ApiError } from "@/utils/api";
import { getUserNickname } from "@/utils/auth";
import type { PostRequest } from "@/types/api";

const CommunityWrite = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // 사용자 닉네임
  const [nickname, setNickname] = useState<string>("");

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const savedNickname = getUserNickname();
    if (savedNickname) {
      setNickname(savedNickname);
    }
  }, []);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleFileButtonClick = () => {
    fileInputRef.current?.click();
  };

  // 파일 선택
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);

    const previewUrl = URL.createObjectURL(file);
    setImagePreviewUrl(previewUrl);
  };

  // 글 작성
  const handleWriteSubmit = async () => {
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 모두 입력해 주세요.");
      return;
    }

    setIsSubmitting(true);

    try {
      let imageUrl: string | null = null;

      // 이미지가 있으면 먼저 업로드
      if (imageFile) {
        imageUrl = await uploadPostImage(imageFile);
      }

      const body: PostRequest = {
        title,
        content,
        imageUrl,
      };

      await createPost(body);

      navigate("/Community/postList");
    } catch (error: unknown) {
      if (error instanceof ApiError) {
        alert(`글 작성에 실패했습니다. (code: ${error.status})`);
      } else {
        alert("글 작성 중 오류가 발생했습니다.");
      }
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <S.Background>
      <Header />

      <S.Profile>
        <S.BACK
          src={Back_white}
          onClick={() => navigate(-1)}
          style={{ cursor: "pointer" }}
        />
        <S.ProfileIMG>
          <S.Letter_CHARCTER src={Letter_Char} />
        </S.ProfileIMG>
        <S.USERNAME>{nickname || "사용자"}</S.USERNAME>
      </S.Profile>

      <S.INPUT_Box>
        <S.Community_titleBOX>
          <S.community_titleAndImg>
            <S.community_title>제목</S.community_title>

            <S.ADD_IMG_button onClick={handleFileButtonClick}>
              <S.ADD_img src={ADD_img} />
            </S.ADD_IMG_button>

            {/* 숨겨진 파일 input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </S.community_titleAndImg>

          <S.Title_Box value={title} onChange={handleTitleChange} />
        </S.Community_titleBOX>

        <S.Community_ContentBOX>
          <S.Community_Contenttitle>내용</S.Community_Contenttitle>

          <S.Content_Box value={content} onChange={handleContentChange} />
        </S.Community_ContentBOX>

        {/* 이미지 선택 시 미리보기 */}
        {imagePreviewUrl && (
          <div style={{ marginTop: "12px" }}>
            <img
              src={imagePreviewUrl}
              alt="업로드 이미지 미리보기"
              style={{
                width: "100%",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
          </div>
        )}
      </S.INPUT_Box>

      <S.Write_Button onClick={handleWriteSubmit} disabled={isSubmitting}>
        {isSubmitting ? "작성 중..." : "글 작성하기"}
      </S.Write_Button>
    </S.Background>
  );
};

export default CommunityWrite;
