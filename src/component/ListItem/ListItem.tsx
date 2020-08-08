import React from 'react';
import './ListItem.css';

interface ListItemProps {
  data: { id: number; name: string; description: string; image: string; audio: string }[];
  handleClickListItem: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  isDisabled: boolean;
}

export const ListItem = (props: ListItemProps) => {
  const { data, handleClickListItem, isDisabled } = props;

  return (
    <div className="list-item">
      <ul>
        {data?.map((i) => (
          <li key={i.id} onClick={handleClickListItem} className={!isDisabled ? '' : 'green'}>
            {i.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
