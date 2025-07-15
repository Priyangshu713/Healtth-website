
import React from 'react';
import { useHealthStore, GeminiModelType, GeminiModelOption } from '@/store/healthStore';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Sparkles, Zap, Cpu, Brain, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';

const GEMINI_MODELS: GeminiModelOption[] = [
  {
    id: "gemini-1.5-flash",
    name: "Gemini 1.5 Flash",
    description: "Fast responses, good for general health questions",
    isPremium: false
  },
  {
    id: "gemini-2.0-flash",
    name: "Gemini 2.0 Flash",
    description: "Latest general purpose model with improved capabilities",
    isPremium: false
  },
  {
    id: "gemini-2.0-pro-exp-02-05",
    name: "Gemini 2.0 Pro",
    description: "Enhanced reasoning and detailed medical information",
    isPremium: true
  },
  {
    id: "gemini-2.0-flash-lite",
    name: "Gemini 2.0 Flash Lite",
    description: "Faster responses, lower resource usage",
    isPremium: false
  },
  {
    id: "gemini-2.0-flash-thinking-exp-01-21",
    name: "Gemini 2.0 Flash Thinking",
    description: "Advanced reasoning with step-by-step thinking process",
    isPremium: true
  },
  {
    id: "gemini-2.5-pro-exp-03-25",
    name: "Gemini 2.5 Pro",
    description: "Latest premium model with advanced reasoning and medical knowledge",
    isPremium: true
  }
];

const ModelIcon = ({ model }: { model: GeminiModelType }) => {
  switch (model) {
    case "gemini-2.0-pro-exp-02-05":
      return <Sparkles className="h-5 w-5 text-yellow-500" />;
    case "gemini-2.0-flash":
      return <Zap className="h-5 w-5 text-health-sky" />;
    case "gemini-2.0-flash-lite":
      return <Cpu className="h-5 w-5 text-health-mint" />;
    case "gemini-2.0-flash-thinking-exp-01-21":
      return <Brain className="h-5 w-5 text-purple-500" />;
    case "gemini-2.5-pro-exp-03-25":
      return <Sparkles className="h-5 w-5 text-amber-600" />;
    default:
      return <Bot className="h-5 w-5 text-health-lavender" />;
  }
};

const GeminiModelSelector: React.FC = () => {
  const { geminiApiKey, geminiModel, setGeminiModel, geminiTier } = useHealthStore();
  const { toast } = useToast();
  
  if (!geminiApiKey) {
    return null;
  }

  const isPremiumUser = geminiTier === 'pro';
  const isLiteUser = geminiTier === 'lite';
  const isFreeUser = geminiTier === 'free';

  const handleModelChange = (value: string) => {
    const selectedModel = GEMINI_MODELS.find(model => model.id === value);
    
    if (isFreeUser) {
      toast({
        title: "AI Models Restricted",
        description: "You need to upgrade to Lite or Pro tier to use AI models",
        variant: "destructive",
      });
      return;
    }
    
    if (selectedModel?.isPremium && !isPremiumUser) {
      toast({
        title: "Premium Model Restricted",
        description: "You need to upgrade to Pro tier to use this premium model",
        variant: "destructive",
      });
      return;
    }
    
    setGeminiModel(value as GeminiModelType);
  };

  const selectedModel = GEMINI_MODELS.find(model => model.id === geminiModel) || GEMINI_MODELS[0];
  
  // Set background color based on tier
  let cardBgColorClass = "bg-blue-50/50 border-blue-200/70";
  let alertColorClass = "text-blue-700 bg-blue-100 border-blue-200";
  
  if (isPremiumUser) {
    cardBgColorClass = "bg-amber-50/50 border-amber-200/70";
    alertColorClass = "text-amber-700 bg-amber-50 border-amber-200";
  } else if (isLiteUser) {
    cardBgColorClass = "bg-purple-50/50 border-purple-200/70";
    alertColorClass = "text-purple-700 bg-purple-50 border-purple-200";
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className={`${cardBgColorClass}`}>
        <CardHeader className="pb-3">
          <CardTitle className="text-xl flex items-center gap-2">
            <Bot className="h-5 w-5 text-health-lavender" />
            Gemini AI Model
          </CardTitle>
          <CardDescription>
            Select which Gemini AI model to use for health recommendations and chat
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Select value={geminiModel} onValueChange={handleModelChange}>
              <SelectTrigger className={`w-full ${cardBgColorClass}`}>
                <SelectValue placeholder="Select a model" />
              </SelectTrigger>
              <SelectContent>
                {GEMINI_MODELS.map((model) => (
                  <SelectItem 
                    key={model.id} 
                    value={model.id}
                    disabled={(model.isPremium && !isPremiumUser) || isFreeUser}
                    className={(model.isPremium && !isPremiumUser) || isFreeUser ? "opacity-60" : ""}
                  >
                    <div className="flex items-center gap-2">
                      <ModelIcon model={model.id} />
                      <span>{model.name}</span>
                      {model.isPremium && (
                        <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 py-0.5 px-2 rounded-full">
                          Premium
                        </span>
                      )}
                      {((model.isPremium && !isPremiumUser) || isFreeUser) && (
                        <Lock className="h-3.5 w-3.5 text-gray-400 ml-auto" />
                      )}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <div className="bg-muted/50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <ModelIcon model={selectedModel.id} />
                <h3 className="font-medium">{selectedModel.name}</h3>
                {selectedModel.isPremium && (
                  <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 py-0.5 px-2 rounded-full">
                    Premium
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{selectedModel.description}</p>
              
              {/* Show different messages based on user tier */}
              {isFreeUser && (
                <div className={`mt-2 flex items-center gap-2 text-xs p-2 rounded border ${alertColorClass}`}>
                  <Lock className="h-3.5 w-3.5" />
                  <span>Upgrade to Lite or Pro tier to use AI models</span>
                </div>
              )}
              
              {!isFreeUser && selectedModel.isPremium && !isPremiumUser && (
                <div className={`mt-2 flex items-center gap-2 text-xs p-2 rounded border ${alertColorClass}`}>
                  <Lock className="h-3.5 w-3.5" />
                  <span>Pro tier required to use this model</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default GeminiModelSelector;
