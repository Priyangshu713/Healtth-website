import React, { useEffect, useState } from 'react';
import { Mail } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/components/ui/use-toast';

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  body: string;
  date: string;
}

// Sample messages used when API data isn't available
const sampleMessages: Message[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    subject: 'Need advice on medication',
    body: 'Hello doctor, I would like to know if I can continue the medication you prescribed last month or if I should adjust the dosage.',
    date: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    subject: 'Follow-up appointment',
    body: 'Dear doctor, could we schedule a follow-up appointment next week? The pain has subsided but I would like to be sure.',
    date: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: '3',
    name: 'Michael Lee',
    email: 'michael.lee@example.com',
    subject: 'Lab results inquiry',
    body: 'Hi doctor, have my recent lab results come in? I am anxious to know if everything is normal.',
    date: new Date(Date.now() - 2 * 86400000).toISOString(),
  },
];

const Inbox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(sampleMessages);
  const { toast } = useToast();

  useEffect(() => {
    // Replace with real API endpoint
    const fetchMessages = async () => {
      try {
        const res = await fetch('/api/doctor/messages');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setMessages(data as Message[]);
      } catch (error) {
        // Demo fallback
        setMessages(sampleMessages);

      }
    };

    fetchMessages();
  }, []);

  const handleReply = (email: string, subject: string) => {
    const mailto = `mailto:${email}?subject=${encodeURIComponent('Re: ' + subject)}`;
    window.location.href = mailto;
    toast({
      title: 'Opening mail client…',
      description: `Replying to ${email}`,
    });
  };

  if (messages.length === 0) {
    return <p className="text-muted-foreground text-sm">No messages.</p>;
  }

  return (
    <ScrollArea className="h-[60vh] pr-4">
      <div className="space-y-4">
        {messages.map((msg) => (
          <Card key={msg.id}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Mail className="h-4 w-4" /> {msg.subject}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                From: {msg.name} ({msg.email}) • {new Date(msg.date).toLocaleDateString()}
              </p>
              <p className="whitespace-pre-line break-words text-sm">{msg.body}</p>
            </CardContent>
            <CardFooter>
              <Button size="sm" onClick={() => handleReply(msg.email, msg.subject)}>
                Reply
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
};

export default Inbox;
