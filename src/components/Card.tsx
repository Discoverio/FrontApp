import React from 'react';
import { View } from 'react-native';
import { Card } from '@ui-kitten/components';

interface Props {
  bkgColor: { backgroundColor: string };
  borderColor: { borderColor: string };
  children: React.ReactNode;
}

export default function aCard({ bkgColor, borderColor, children }: Props) {
  return (
    <Card style={[{ margin: 10, borderRadius: 10, overflow: 'hidden', borderColor: 'red', borderWidth: 2 }, bkgColor]}>
      <View>
        {children}
      </View>
    </Card>
  );
}