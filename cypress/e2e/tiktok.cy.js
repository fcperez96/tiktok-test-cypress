import HomePage from '../pages/homePage';
import SearchResultsPage from '../pages/searchResultsPage';
import VideoPage from '../pages/videoPage';

describe('TikTok without login', () => {
  const homePage = new HomePage();
  const searchResultsPage = new SearchResultsPage();
  const videoPage = new VideoPage();

  it('performs a search and verifies functionality', () => {
    homePage.visit();
    homePage.closeLoginModal();
    homePage.searchForHashtag('#code');

    searchResultsPage.verifySearchResults();
    searchResultsPage.selectFirstVideo();

    videoPage.verifyVideoPlaying();
    videoPage.verifyViewComments();
    videoPage.verifyShareVideoToFriends();
  })
})