import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export interface Criterion {
  id: string;
  text: string;
}

const CriteriaManager = () => {
  const [criteria, setCriteria] = useState<Criterion[]>([]);
  const [newCriterion, setNewCriterion] = useState("");
  const { toast } = useToast();

  const handleAdd = () => {
    if (!newCriterion.trim()) {
      toast({
        title: "Error",
        description: "Please enter a criterion",
        variant: "destructive",
      });
      return;
    }

    setCriteria((prev) => [...prev, { id: crypto.randomUUID(), text: newCriterion.trim() }]);
    setNewCriterion("");
    
    toast({
      title: "Success",
      description: "Criterion added successfully",
    });
  };

  const handleDelete = (id: string) => {
    setCriteria((prev) => prev.filter((criterion) => criterion.id !== id));
    
    toast({
      title: "Success",
      description: "Criterion removed successfully",
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6 animate-fade-in">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Evaluation Criteria</h2>
        <p className="text-muted-foreground">
          Add criteria to evaluate YC applications against.
        </p>
      </div>

      <div className="flex gap-2">
        <Input
          value={newCriterion}
          onChange={(e) => setNewCriterion(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter a new criterion..."
          className="flex-1"
        />
        <Button onClick={handleAdd}>
          <Plus className="w-4 h-4 mr-2" />
          Add
        </Button>
      </div>

      <div className="space-y-2">
        {criteria.map((criterion) => (
          <div
            key={criterion.id}
            className="flex items-center justify-between p-3 rounded-lg bg-secondary animate-fade-in"
          >
            <span>{criterion.text}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleDelete(criterion.id)}
              className="hover:text-destructive"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CriteriaManager;