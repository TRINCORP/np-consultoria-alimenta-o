import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, Mail, FileText } from "lucide-react";

interface FormSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'contact' | 'resume';
}

const FormSuccessModal = ({ isOpen, onClose, type }: FormSuccessModalProps) => {
  const isContact = type === 'contact';
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-background border-border">
        <DialogHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-primary-foreground" />
          </div>
          <DialogTitle className="text-xl sm:text-2xl font-playfair text-foreground">
            {isContact ? 'Mensagem Enviada!' : 'Currículo Enviado!'}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            {isContact 
              ? 'Obrigado pelo seu contacto! A nossa equipa irá analisar a sua mensagem e responderemos o mais breve possível.'
              : 'Obrigado pelo seu interesse em fazer parte da nossa equipa! Analisaremos o seu currículo e entraremos em contacto caso o seu perfil corresponda às nossas necessidades.'
            }
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col items-center gap-4 mt-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            {isContact ? (
              <>
                <Mail className="w-4 h-4" />
                <span>Responderemos em até 48 horas úteis</span>
              </>
            ) : (
              <>
                <FileText className="w-4 h-4" />
                <span>O processo de análise leva até 7 dias úteis</span>
              </>
            )}
          </div>
          
          <Button 
            onClick={onClose}
            className="w-full sm:w-auto px-8 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Entendido
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FormSuccessModal;
