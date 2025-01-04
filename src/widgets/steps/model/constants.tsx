import { FaDownload, FaPlus, FaPlay } from "react-icons/fa";
import type { Step } from "./types";

export const STEPS: Step[] = [
  {
    icon: <FaDownload />,
    title: "프로그램 설치",
    description: "프로그램을 다운로드하고 설치합니다.",
  },
  {
    icon: <FaPlus />,
    title: "자막 파일 불러오기",
    description: "SRT 형식의 자막 파일을 프로그램으로 불러옵니다.",
  },
  {
    icon: <FaPlay />,
    title: "실행 및 동기화",
    description: "DAW를 실행하고 프로그램을 통해 자동으로 동기화합니다.",
  },
];
