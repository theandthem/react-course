import Text from './Text';
import style from './Topic.module.css';

function Topic2() {
  return (
    <section className={style.topic}>
      <section className={style.screen}> 
        <Text content="Topic 2" textStyle="h4" />
        <Text content="Screen one" textStyle="h1" />
        <Text content="Build in progress" textStyle="h3" />
      </section>
    </section>
  );
}

export default Topic2;