import { useState, type ChangeEvent } from "react";
import type { FormEvent } from "react";
import Innerheader from "../innerheader";

export default function Contact() {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("bug");
  const [content, setContent] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!nickname.trim() || !email.trim() || !content.trim()) {
      setMessage("닉네임, 이메일, 문의 내용을 모두 입력해 주세요.");
      return;
    }
    if (!agree) {
      setMessage("개인정보 수집·이용에 동의해 주세요.");
      return;
    }

    setLoading(true);
    setMessage("문의가 정상적으로 접수되었습니다. 빠른 시일 내에 이메일로 답변 드리겠습니다.");
    // TODO: 실제로 이메일 전송 API 또는 Supabase 테이블에 저장하는 로직 추가
    setLoading(false);
  };

  return (
    <div className="bg-base-color w-screen h-screen text-white overflow-y-auto">
      <Innerheader />
      <div className="max-w-[900px] mx-auto px-6 py-8">
        {/* 타이틀 */}
        <h1 className="text-[32px] md:text-[44px] font-bold mb-6 border-b-2 border-white pb-3">
          가위바위보 포커 문의하기
        </h1>

        {/* 소개 문구 */}
        <p className="text-[20px] leading-relaxed mb-6">
          게임 이용 중 발견한 버그, 계정 관련 문의, 개선 아이디어 등 무엇이든 편하게 보내 주세요.
          입력하신 이메일로 최대 1~3일 이내에 답변 드리겠습니다.
        </p>

        {/* 문의 양식 */}
        <form onSubmit={handleSubmit} className="space-y-5 text-[20px]">
          {/* 닉네임 */}
          <div>
            <label className="block mb-2">닉네임 (필수)</label>
            <input
              type="text"
              value={nickname}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setNickname(e.target.value)}
              className="w-full rounded-[10px] bg-[#D9D9D9] text-black px-3 py-2 text-[20px]"
              maxLength={20}
              disabled={loading}
            />
          </div>

          {/* 이메일 */}
          <div>
            <label className="block mb-2">이메일 (필수)</label>
            <input
              type="email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              className="w-full rounded-[10px] bg-[#D9D9D9] text-black px-3 py-2 text-[20px]"
              placeholder="example@email.com"
              disabled={loading}
            />
          </div>

          {/* 문의 유형 */}
          <div>
            <label className="block mb-2">문의 유형</label>
            <select
              value={type}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => setType(e.target.value)}
              className="w-full rounded-[10px] bg-[#D9D9D9] text-black px-3 py-2 text-[20px]"
              disabled={loading}
            >
              <option value="bug">버그 제보</option>
              <option value="account">계정/로그인 관련</option>
              <option value="suggest">게임 개선 건의</option>
              <option value="etc">기타 문의</option>
            </select>
          </div>

          {/* 내용 */}
          <div>
            <label className="block mb-2">문의 내용 (필수)</label>
            <textarea
              value={content}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
              className="w-full h-[200px] rounded-[10px] bg-[#D9D9D9] text-black px-3 py-2 text-[20px] resize-none"
              placeholder="상세한 상황, 발생 시점, 재현 방법 등을 가능한 한 자세히 적어주세요."
              disabled={loading}
            />
          </div>

          {/* 개인정보 동의 */}
          <div className="flex items-start gap-2">
            <input
              id="agree"
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="mt-1 w-5 h-5"
              disabled={loading}
            />
            <label htmlFor="agree" className="leading-relaxed">
              문의 처리 및 답변을 위해 닉네임과 이메일 주소를 수집·이용하는 것에 동의합니다. 자세한 내용은{" "}
              <span className="underline cursor-pointer">개인정보 처리방침</span>을 참고해 주세요.
            </label>
          </div>

          {/* 메시지 */}
          {message && (
            <div className="text-[20px] text-center text-[#FFD966]">
              {message}
            </div>
          )}

          {/* 제출 버튼 */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-[70px] rounded-[20px] bg-[#0E2B8D] text-[24px] font-semibold cursor-pointer disabled:opacity-50"
          >
            {loading ? "전송 중..." : "문의 보내기"}
          </button>
        </form>
      </div>
    </div>
  );
}
