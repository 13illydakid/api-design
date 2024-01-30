export default function Image({src,...rest}) {
  src = src && src.includes('https://')
    ? src
    // : 'http://localhost:3000/spots/'+src;
    : 'http://localhost:4000/uploads/'+src;
    // : 'http://localhost:4000/../frontend/public/images/'+src;
    // : '../../public/images/'+src;
  return (
    <img {...rest} src={src} alt={''} />
  );
}
