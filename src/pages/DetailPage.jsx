import { useParams } from 'react-router-dom';
import DetailSection from '../components/content/DetailSection';

export default function DetailPage() {
  const { id } = useParams();

  return <DetailSection id={id} />;
}