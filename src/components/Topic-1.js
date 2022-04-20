import Text from './Text';
import Image from './Image';
import style from './Topic.module.css';

function Topic1() {
  return (
    <section className={style.topic}>
       <section className={style.screen}>
        <Text content="Simple course built with both custom built and MUI components." textStyle="h1" />
      </section>
      <section className={style.screen}>
        <Text content="Topic 1" textStyle="h4" />
        <Text content="Screen one" textStyle="h1" />
        <Text content="Santa Cruz 5010" textStyle="h3" />
        <Text content="This is a trail bike, good for fast singletrack and xc." />
        <Image imageSource="resources/sc5010.jpg" imageAlt="Santa Cruz 5010 bike" />
      </section>
      <section className={style.screen}> 
        <Text content="Screen two" textStyle="h1" />
        <Text content="Santa Cruz Bronson" textStyle="h3" />
        <Text content="All rounder, good for everything." />
        <Image imageSource="resources/scbronson.jpg" imageAlt="Santa Cruz 5010 bike" />
      </section>
      <section className={style.screen}> 
        <Text content="Screen three" textStyle="h1" />
        <Text content="Santa Cruz High Tower" textStyle="h3" />
        <Text content="Silly big wheels, if you like that sort of thing." />
        <Image imageSource="resources/schightower.jpg" imageAlt="Santa Cruz 5010 bike" />
      </section>
    </section>
  );
}

export default Topic1;