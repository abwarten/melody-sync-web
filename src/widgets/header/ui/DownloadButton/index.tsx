import { NavLink } from "@/shared/ui/nav-link";
import { FaDownload } from "react-icons/fa";

const DownloadButton = () => {
  return (
    <NavLink
      href="https://github.com/abwarten/Melody-Sync-Release/releases/download/v0.0.3-beta/MelodySync-Setup-0.0.3-beta.exe"
      variant="download"
    >
      <FaDownload className="mr-2" />
      다운로드
    </NavLink>
  );
};

export default DownloadButton;
