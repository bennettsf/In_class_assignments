
import './App.css';
import RecipeGallery from './components/RecipeGallery';
import FeatureToggle from './components/FeatureToggle';

function App() {
  return (
    <div className="App">
      <FeatureToggle
      isEnabled
      featureName="Got the Mail"
       />
       <FeatureToggle
      isEnabled
      featureName="Brushed My Teeth"
       />
       <FeatureToggle
      isEnabled={false}
      featureName="Made Coffee"
       />
       <FeatureToggle
      isEnabled={false}
      featureName="Fed the Dog"
       />
       <FeatureToggle
      isEnabled
      featureName="Took a Shower"
       />
       <RecipeGallery />
    </div>
  );
}

export default App;
