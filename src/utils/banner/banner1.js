import React from 'react';
import {Card} from '../../imports'

const imgPublicID = [
  "saveup_saf6k3",
  "electronics_eq4hjv"
];

const AdsBanner = () => {
    return (
      <div className="Banner">
        {imgPublicID.map( publicID => 
        <Card key={publicID} publicId={`konga/${publicID}`} />
        )}
      </div>
    );
}

export default AdsBanner
