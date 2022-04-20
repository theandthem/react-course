import Text from './Text';
import style from './Topic.module.css';
import SimpleAccordion from './SimpleAccordion';
import TabPanel from  './TabPanel.js';

function Topic2() {
  return (
    <section className={style.topic}>
      <section className={style.screen}> 
        <Text content='Topic 2' textStyle='h4' />
        <Text content='Screen one' textStyle='h1' />
        <Text content='Accordion from the MUI library' />
        <SimpleAccordion steps={[
          {title: 'Step one', content:'This is step one content'},
          {title: 'Step two', content:'This is step two content'},
          {title: 'Step three', content:'This is step three content'}
          ]}
        />
      </section>
      <section className={style.screen}> 
        <Text content='Screen two' textStyle='h1' />
        <Text content='Tabs from the MUI library' />
        <TabPanel items={[
          {title:'Tab one', content:'Content for tab one.'},
          {title:'Tab two', content:'Some content for tab two.'},
          {title:'Tab three', content:'Finally, content for tab three.'},
          ]}
        />
      </section>
      <section className={style.screen}> 
        <Text content='Screen three' textStyle='h1' />
        <Text content='Anoter Tab component from the MUI library to test keys & reusing components' />
        <TabPanel items={[
          {title:'Tab four', content:'Content for tab four.'},
          {title:'Tab five', content:'Some content for tab five.'},
          {title:'Tab six', content:'Finally, content for tab six.'},
          ]}
        />
      </section>
    </section>
  );
}

export default Topic2;