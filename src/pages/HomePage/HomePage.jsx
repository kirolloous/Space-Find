import { useState, useMemo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Separator } from '@/components/ui';
import ListingFilters from '@/components/ListingFilters/ListingFilters';
import ListingList from '@/components/ListingList/ListingList';
import useFetch from '@/hooks/useFetch';
import DataRenderer from '@/components/DataRenderer/DataRenderer';
import { fetchListings } from '@/state/listings/listingsSlice';
const HomePage = () => {
  const { listings, error, status } = useSelector((state) => state.listings);
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    dates: undefined,
    guests: 0,
    search: '',
  });

  const fetchOptions = useMemo(() => ({ params: filters }), [filters]);

  useEffect(() => {
    const request = dispatch(fetchListings(fetchOptions));

    return () => {
      request.abort();
    };
  }, [dispatch, fetchOptions]);

  const handleFilters = useCallback((filters) => {
    setFilters(filters);
  }, []);

  return (
    <div className='container py-4'>
      <div className='mb-4'>
        <ListingFilters onChange={handleFilters} />
        <Separator className='my-4' />
      </div>
      <DataRenderer error={error} isLoading={status === 'loading'}>
        <ListingList listings={listings} />
      </DataRenderer>
    </div>
  );
};

export default HomePage;