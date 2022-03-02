import poll from './poll.html';
import './poll.css';


export default function injectPoll(): void {
  const container = document.getElementById('poll');
  if (container) {
    container.innerHTML = poll as string
  }
}