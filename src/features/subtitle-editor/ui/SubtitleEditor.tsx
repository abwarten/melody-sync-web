"use client";

import styled from "@emotion/styled";
import { Button } from "@/shared/ui/Button/Button";
import { formatTime } from "@/shared/lib/time";
import { type Subtitle } from "@/entities/subtitle/model/types";

const EditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background: var(--gray-alpha-100);
  border-radius: 8px;
`;

const SubtitleRow = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 1fr 80px;
  gap: 8px;
  align-items: center;
`;

interface SubtitleEditorProps {
  subtitles: Subtitle[];
  onEdit: (subtitle: Subtitle) => void;
}

export const SubtitleEditor = ({ subtitles, onEdit }: SubtitleEditorProps) => {
  return (
    <EditorWrapper>
      {subtitles.map((subtitle) => (
        <SubtitleRow key={subtitle.id}>
          <span>{formatTime(subtitle.startTime)}</span>
          <span>{formatTime(subtitle.endTime)}</span>
          <input
            type="text"
            value={subtitle.text}
            onChange={(e) => onEdit({ ...subtitle, text: e.target.value })}
          />
          <Button variant="secondary">편집</Button>
        </SubtitleRow>
      ))}
    </EditorWrapper>
  );
};
