import { resolve } from 'inversify-react';
import 'reflect-metadata';
import * as React from 'react';
import { useContext } from 'react';
import { ApiBasePath } from '../api-path/api-path-provider';
import { NftCollection } from './models';

export interface ICollectionsListProps {}

export interface ICollectionsListState {
  collections: any;//NftCollection[];
}

export default class CollectionsList extends React.Component<ICollectionsListProps, ICollectionsListState> {
  @resolve(ApiBasePath)
  private readonly path!: ApiBasePath;

  constructor(props: ICollectionsListProps) {
    super(props);

    this.state = { collections: [] };
  }

  componentDidMount() {
    fetch(this.path.basePath + 'entries')
      .then((response) => response.json())
      .then((res) => {
          console.log('collections', res);
        this.setState({ collections: res.entries });
      });
  }

  public render() {
    return (
      <ul>
        {this.state.collections.map((col: any) => (
          <li key={col.Link}>{col.Link}</li>
        ))}
      </ul>
    );
  }
}
