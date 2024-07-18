import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Your Bare-Bones App</h1>
      <p className="text-xl mb-6">
        This is a minimal web application that you can modify and build upon.
        It includes a basic structure with a home page, navigation, and footer.
      </p>
      <Button>Get Started</Button>
    </div>
  );
};

export default Index;