import { SelectButton } from '@components/SelectButton';
import { css } from '@emotion/react';
import React from 'react';
import { useTeamSelect } from './useTeamSelect';

export function TeamSelect() {
  const { team, teamOption, changeFilterSelectValue } = useTeamSelect();

  return (
    <SelectButton
      options={teamOption}
      placeholder="전체 팀"
      value={team}
      onChange={(e) => changeFilterSelectValue(e)}
      css={css`
        width: 100%;
      `}
    />
  );
}