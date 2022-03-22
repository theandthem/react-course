import Text from './Text';
import style from './Topic.module.css';

function Topic2() {
  return (
    <section className={style.topic}>
      <Text content="This is topic two" textStyle="h1" />
      <Text content="Build in progress..." />
    </section>
  );
}

export default Topic2;