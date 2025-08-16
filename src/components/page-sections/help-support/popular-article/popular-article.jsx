import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FiExternalLink } from "react-icons/fi";

const PopularArticle = () => {
  // Popular help articles
  const popularArticles = [
    {
      title: "Getting Started with Telehealth",
      description: "Learn how to set up and use our telehealth services",
      category: "Telehealth",
    },
    {
      title: "Understanding Your Bill",
      description: "A guide to reading and paying your medical bills",
      category: "Billing",
    },
    {
      title: "Prescription Refill Process",
      description: "How to request refills for your medications",
      category: "Pharmacy",
    },
  ];
  return (
    <>
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Popular Help Articles</CardTitle>
          <CardDescription>
            Browse our most frequently accessed resources
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          {popularArticles.map((article, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium mb-1">{article.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {article.description}
                    </p>
                    <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                      {article.category}
                    </span>
                  </div>
                  <FiExternalLink className="h-5 w-5 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </>
  );
};

export default PopularArticle;
