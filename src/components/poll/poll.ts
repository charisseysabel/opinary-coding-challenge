import poll from './poll.html';
import { IConfig } from '../../types';
import './poll.css';

export default function loadPoll(window: Window, config: IConfig): void {
  const container = document.getElementById('poll');
  if (container) {
    container.innerHTML = poll as string
  }
}
