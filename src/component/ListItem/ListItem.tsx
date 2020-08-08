import React from 'react';
import './ListItem.css';

interface ListItemProps {
  data: { id: number; name: string; description: string; image: string; audio: string; activeClass: string }[];
  handleClickListItem: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

export const ListItem = (props: ListItemProps) => {
  const { data, handleClickListItem } = props;

  return (
    <div className="list-item">
      <ul>
        {data?.map((i) => (
          <li key={i.id} onClick={handleClickListItem} className={i.activeClass}>
            {i.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
