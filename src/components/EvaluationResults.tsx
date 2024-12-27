import { Copy, Share2, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const EvaluationResults = () => {
  const { toast } = useToast();
  const dummyResult = `Based on our evaluation, your startup shows strong potential in:

1. Market Opportunity
- Clear problem identification
- Large addressable market
- Unique value proposition

2. Team Capabilities
- Strong technical background
- Relevant industry experience
- Demonstrated execution ability

3. Growth Strategy
- Clear go-to-market plan
- Scalable business model
- Competitive advantage

Areas for improvement:
- Further validation of customer acquisition strategy
- More detailed financial projections
- Clearer path to profitability`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(dummyResult);
    toast({
      title: "Copied!",
      description: "Results copied to clipboard",
    });
  };

  const handleShare = (platform: "twitter" | "linkedin") => {
    const text = encodeURIComponent("Check out my YC application evaluation results!");
    const url = encodeURIComponent(window.location.href);

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };

    window.open(shareUrls[platform], "_blank");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold">Evaluation Results</h2>
          <p className="text-muted-foreground">
            Review and share your application evaluation.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={handleCopy}>
            <Copy className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => handleShare("twitter")}>
            <Twitter className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => handleShare("linkedin")}>
            <Linkedin className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <Textarea
        value={dummyResult}
        readOnly
        className="min-h-[400px] text-base leading-relaxed"
      />
    </div>
  );
};

export default EvaluationResults;