import ListingList from '@/components/ListingList/ListingList';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

const ListingFavoritesPage = () => {
  const { listings, favoriteListingIds } = useSelector(
    (state) => state.listings,
  );

  const favoriteListings = useMemo(
    () => listings.filter((listing) => favoriteListingIds.includes(listing.id)),
    [listings, favoriteListingIds],
  );

  return (
    <div className='container py-4'>
      <ListingList listings={favoriteListings} />
    </div>
  );
};

export default ListingFavoritesPage;
