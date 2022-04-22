import React from 'react';
import Text from './Text';
import Image from './Image';
import style from './Topic.module.css';

const Components = {
  text: Text,
  image: Image,
};

// All data in a topic? Bit messy but it builds down or should it be in th store? Not really state.
const topicData = [
  {
    screenId: 't1s1',
    components: [
      {
        id: 'c1',
        type: 'text',
        data: {
          content: 'Topic 1',
          textStyle: 'h4',
        },
      },
      {
        id: 'c1',
        type: 'text',
        data: {
          content: 'Simple course built with both custom built and MUI components.',
          textStyle: 'h4',
        },
      },
    ]
  },
  {
    screenId: 't1s2',
    components: [
      {
        id: 'c2',
        type: 'text',
        data: {
          content: 'Screen one',
          textStyle: 'h1',
        },
      },
      {
        id: 'c3',
        type: 'text',
        data: {
          content: 'Santa Cruz 5010',
          textStyle: 'h3',
        },
      },
      {
        id: 'c4',
        type: 'text',
        data: {
          content: 'A simple fast trail bike.',
          textStyle: 'paragraph',
        },
      },
      {
        id: 'c5',
        type: 'image',
        data: {
          imageSource: 'resources/sc5010.jpg',
          imageAlt: 'Santa Cruz 5010 bike',
        },
      },
    ]
  },
  {
    screenId: 't1s3',
    components: [
      {
        id: 'c1',
        type: 'text',
        data: {
          content: 'Screen two',
          textStyle: 'h1',
        },
      },
      {
        id: 'c2',
        type: 'text',
        data: {
          content: 'Santa Cruz bronson',
          textStyle: 'h3',
        },
      },
      {
        id: 'c4',
        type: 'text',
        data: {
          content: 'A mid travel all mountain bike.',
          textStyle: 'paragraph',
        },
      },
      {
        id: 'c5',
        type: 'image',
        data: {
          imageSource: 'resources/scbronson.jpg',
          imageAlt: 'Santa Cruz bronson bike',
        },
      },
    ]
  }
]

function Topic1() {
  return (
    <section className={style.topic}>
      {topicData.map(function(screen, index){
          return (
            <section className={style.screen} key={index}>
              {screen.components.map(function(component, index) {
                return React.createElement(Components[component.type], {
                  key: index,
                  data: component.data,
                });
              })}
            </section>
          );
      })}
    </section>
  );
}

export default Topic1;