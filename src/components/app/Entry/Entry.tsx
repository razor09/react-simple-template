import { BrowserRouter } from 'react-router-dom';
import { EntryComponent } from './Entry.d';
import style from './Entry.scss';

export const Entry: EntryComponent = () => {
  return (
    <BrowserRouter>
      <div className={style.container}>React Template</div>
    </BrowserRouter>
  );
};
