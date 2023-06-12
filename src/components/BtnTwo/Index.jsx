import { Container } from './styles';

export function BtnTwo({ icon: Icon, text, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon />}
      {text}
    </Container>
  );
}
