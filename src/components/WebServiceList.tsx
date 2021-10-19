import React from 'react';
import WebService from './WebService';

// TODO 定義が重複しているのでどこかで統一する
type Props = {
  webServices: {
    id: number;
    name: string;
    serviceUrl: string;
    ogpUrl: string;
    description: string;
  }[];
};

const WebServiceList: React.VFC<Props> = ({ webServices }) => (
  <section className="items">
    <div className="w-container">
      <h1 className="heading-decoration">WebServices</h1>
      <p>These are web services developed by the organization</p>
      <div className="items-container">
        {webServices.map((webService) => (
          <WebService
            key={webService.id}
            id={webService.id}
            name={webService.name}
            serviceUrl={webService.serviceUrl}
            ogpUrl={webService.ogpUrl}
            description={webService.description}
          />
        ))}
      </div>
    </div>
  </section>
);

export default WebServiceList;
