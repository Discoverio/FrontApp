import React from 'react';
import { List, ListItem, Text } from '@ui-kitten/components';

const KittenList = ({ data }) => {
  const renderItem = ({ item }) => (
    <ListItem title={item.title} description={`Element ${item.id}`} />
  );

  return (
    <List
      data={data}
      renderItem={renderItem}
    />
  );
};

export default KittenList;
