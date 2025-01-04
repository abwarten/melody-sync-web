import { FaCog, FaPlus, FaSearch, FaTv, FaSync } from "react-icons/fa";
import type { Feature } from "./types";

export const FEATURES: Feature[] = [
  {
    icon: <FaCog />,
    title: "설정 기능",
    description: "프로그램의 다양한 설정을 사용할 수 있습니다.",
  },
  {
    icon: <FaPlus />,
    title: "자막 추가",
    description: "새로운 노래와 자막을 손쉽게 추가할 수 있습니다.",
  },
  {
    icon: <FaSearch />,
    title: "검색 기능",
    description: "등록된 노래와 자막을 검색하고 효율적으로 관리할 수 있습니다.",
  },
  {
    icon: <FaTv />,
    title: "OBS 출력",
    description: "동기화된 자막을 OBS에 출력하여 방송에서 활용할 수 있습니다.",
  },
  {
    icon: <FaSync />,
    title: "실시간 동기화",
    description: "DAW의 오디오 신호와 자막을 실시간으로 동기화합니다.",
  },
];
