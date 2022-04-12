import Text from './Text';
import style from './Topic.module.css';
import SimpleAccordion from './SimpleAccordion';

function Topic2() {
  return (
    <section className={style.topic}>
      <section className={style.screen}> 
        <Text content="Topic 2" textStyle="h4" />
        <Text content="Screen one" textStyle="h1" />
        <SimpleAccordion steps={[
          {title: 'Step one', content:'This is step one content'},
          {title: 'Step two', content:'This is step two content'},
          {title: 'Step three', content:'This is step three content'}
          ]}
        />
      </section>
    </section>
  );
}

export default Topic2;