import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '@/api';
import { Spinner } from '@/components/ui';
import ListingDetailsCard from '@/components/ListingDetailsCard/ListingDetailsCard';
import useFetch from '@/hooks/useFetch';
import DataRenderer from '@/components/DataRenderer/DataRenderer';

const ListingDetailsPage = () => {
  const { listingId } = useParams();
  const {
    data: listing,
    error,
    isLoading,
  } = useFetch(`/api/listings/${listingId}`);

  return (
    <div className='container py-4'>
      <DataRenderer error={error} isLoading={isLoading}>
        <ListingDetailsCard listing={listing} />
      </DataRenderer>
    </div>
  );
};

export default ListingDetailsPage;
